import { title } from "../data";
import { Logo } from "~/components/ui/logo";
import { Typewriter } from "./Typewriter";

export function Title() {
  function parseForHighlightedWords(text: string) {
    const wordsAndSpaces = text.split(/(\s+)/);

    return wordsAndSpaces.map((chunk, index) => {
      const isHighlighted = title.highlight
        .map((word) => word.toLowerCase())
        .includes(chunk.trim().toLowerCase());

      return (
        <span
          key={index}
          className={`${isHighlighted ? "text-white drop-shadow-[0px_0px_3px_white]" : ""}`}
        >
          {chunk}
        </span>
      );
    });
  }

  return (
    <div className="w-full grow basis-1">
      {/* Typewriter animation for the phrases - LARGER SIZE */}
      <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:mt-8 sm:mt-16 mb-2 text-center">
        <Typewriter 
          phrases={title.typewriterPhrases}
          typingSpeed={100}
          deletingSpeed={50}
          pauseTime={1500}
          className="text-blue-500 font-mono"
        />
      </h1>
      
      {/* Logo */}
      <Logo 
        className="mx-auto w-32 sm:w-48 md:w-64 lg:w-full max-w-[200px]" 
        glow 
      />

      
      {/* Subtitle with highlighted words */}
      <div className="mb-8 text-center text-xl font-light text-muted-foreground">
        {parseForHighlightedWords(title.subTitle)}
      </div>
    </div>
  );
}