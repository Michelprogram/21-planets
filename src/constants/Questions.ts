interface Question {
  question: string;
  icon: string;
}

const questions: Array<Question> = [
  {
    question: "Votre planète ne répond plus ?",
    icon: "https://cdn-icons-png.flaticon.com/512/3616/3616215.png",
  },
  {
    question: "Vos trous noirs ne sont pas noirs ?",
    icon: "https://cdn-icons-png.flaticon.com/512/3240/3240848.png",
  },
  {
    question: "Un problème conçernant la brillance de vos étoiles ?",
    icon: "https://cdn-icons-png.flaticon.com/512/3174/3174373.png",
  },
  {
    question: "Vous ne trouvez plus votre planète ?",
    icon: "https://cdn-icons-png.flaticon.com/512/428/428094.png",
  },
  {
    question:
      "Vous voulez en savoir plus sur la garantie vol/casse de votre planète ?",
    icon: "https://cdn-icons-png.flaticon.com/512/4062/4062993.png",
  },
  {
    question:
      "Vous soupçonnez vos trous noirs d’avoir avalés votre mère (ou autre...) ?",
    icon: "https://cdn-icons-png.flaticon.com/512/1387/1387329.png",
  },
];

export { questions };
