type UpdateChoiceDTO = (
  choice: McqChoice, 
  payload: "UPDATE-CORRECT" | "UPDATE-CHOICE" | "UPDATE-EXPL"
) => void; 