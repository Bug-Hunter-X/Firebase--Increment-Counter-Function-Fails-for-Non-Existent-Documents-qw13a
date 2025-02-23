function incrementCounter(docRef) {
  docRef.get().then((doc) => {
    if (doc.exists) {
      let counter = doc.data().counter;
      counter++;
      docRef.update({ counter: counter });
    } else {
      // Create the document if it doesn't exist
      docRef.set({ counter: 1 });
    }
  }).catch((error) => {
    console.error("Error incrementing counter: ", error);
  });
}