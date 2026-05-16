import { motion } from"framer-motion";
import type React from"react";

const elyseCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface WordRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?:"p" |"h1" |"h2" |"h3" |"span";
}

const WordReveal = ({
  text,
  className ="",
  style,
  delay = 0,
  as: Tag ="p",
}: WordRevealProps) => {
  // Animate by word instead of individual letters
  // so headings stay readable and words stay together.
  const words = text.split(" ").filter(Boolean);

  return (
    <Tag className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.35em]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.08,
            ease: elyseCurve,
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

export default WordReveal;
