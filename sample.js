
(async () => {
  console.log(1);

  await new Promise(resolve => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  })
  
})()
  .then(() => {
    console.log(3);
  });
