export default function capitalizeParagraph(paragraph) {
    const words = paragraph.split(" ");

    const capitalizedWords = words.map((word) => {
        const capitalizedFirstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1);
        return capitalizedFirstLetter + restOfWord;
    });

    return capitalizedWords.join(" ");
}