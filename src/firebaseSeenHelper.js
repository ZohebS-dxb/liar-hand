import { getDatabase, ref, set, onValue } from "firebase/database";

export function getGameKey(repoName) {
  switch (repoName) {
    case "liar-1":
      return "SeenQuestionsNumbers";
    case "liar-point":
      return "SeenQuestionsPoint";
    case "liar-celebrities":
      return "SeenQuestionsCelebrities";
    case "liar-hand":
      return "SeenQuestionsHand";
    case "liar-imposter":
      return "SeenQuestionsImposter";
    default:
      return "SeenQuestionsUnknown";
  }
}

export function saveSeenQuestions(repoName, seenQuestionsArray) {
  const db = getDatabase();
  const gameKey = getGameKey(repoName);
  set(ref(db, gameKey), seenQuestionsArray);
}

export function listenToSeenQuestions(repoName, callback) {
  const db = getDatabase();
  const gameKey = getGameKey(repoName);
  const seenRef = ref(db, gameKey);

  onValue(seenRef, (snapshot) => {
    const data = snapshot.val();
    const seen = Array.isArray(data) ? data : Object.values(data || {});
    callback(seen);
  });
}
