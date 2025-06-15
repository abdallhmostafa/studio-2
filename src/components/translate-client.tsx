'use client';

import { translateContent } from '@/ai/flows/translate-content';
import { useEffect, useState, useMemo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface TranslateProps {
  text: string | undefined;
  targetLanguage: string;
  originalLanguage?: string;
  as?: React.ElementType;
  className?: string;
  placeholderLines?: number; // Number of skeleton lines for loading
}

export function TranslateClient({ 
  text, 
  targetLanguage, 
  originalLanguage = 'en', 
  as: Component = 'span', 
  className,
  placeholderLines = 1 
}: TranslateProps) {
  const [translatedText, setTranslatedText] = useState<string | undefined>(text);
  const [isLoading, setIsLoading] = useState(false);

  // Memoize the default text to prevent re-renders if text prop itself is stable but targetLanguage changes
  const defaultText = useMemo(() => text, [text]);

  useEffect(() => {
    if (!text) {
      setTranslatedText(undefined); // Handle undefined input text
      return;
    }
    
    if (targetLanguage.toLowerCase() === originalLanguage.toLowerCase()) {
      setTranslatedText(text);
      setIsLoading(false);
      return;
    }

    let isActive = true; // To prevent state updates on unmounted component

    async function doTranslate() {
      setIsLoading(true);
      try {
        const result = await translateContent({ text: text!, targetLanguage });
        if (isActive) {
          setTranslatedText(result.translatedText);
        }
      } catch (error) {
        console.error('Translation error:', error);
        if (isActive) {
          setTranslatedText(text); // Fallback to original text
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    if (text && targetLanguage) {
      doTranslate();
    } else {
      // If text or targetLanguage is not available, reset to original
      setTranslatedText(text);
      setIsLoading(false);
    }
    
    return () => {
      isActive = false; // Cleanup function to set isActive to false
    };

  }, [defaultText, text, targetLanguage, originalLanguage]);


  if (isLoading) {
    return (
      <Component className={className}>
        {Array.from({ length: placeholderLines }).map((_, i) => (
          <Skeleton key={i} className={`h-4 w-3/4 my-1 ${placeholderLines > 1 && i < placeholderLines -1 ? 'mb-2' : ''}`} />
        ))}
      </Component>
    );
  }
  
  if (translatedText === undefined) {
     return (
      <Component className={className}>
        {Array.from({ length: placeholderLines }).map((_, i) => (
          <Skeleton key={i} className={`h-4 w-3/4 my-1 ${placeholderLines > 1 && i < placeholderLines -1 ? 'mb-2' : ''}`} />
        ))}
      </Component>
    );
  }

  return <Component className={className}>{translatedText}</Component>;
}
