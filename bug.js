function incrementCounter(docRef) {
  docRef.get().then((doc) => {
    if (doc.exists) {
      let counter = doc.data().counter;
      counter++;
      docRef.update({ counter: counter });
    } else {
      // Handle the case where the document doesn't exist
      console.log("Document does not exist!");
    }
  }).catch((error) => {
    console.error("Error incrementing counter: ", error);
  });
}