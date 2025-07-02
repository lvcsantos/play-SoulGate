const isPhantomInstalled = window.phantom?.solana?.isPhantom;
var globalSolanaPublicKey = "";

//gets the provider and opens the phantom wallet if it is not installed
const getProvider = () => {
  if ("phantom" in window) {
    const provider = window.phantom?.solana;
    //what does putting a ? after a variable do?
    // it is called optional chaining, and it is a new feature in ES2020\

    if (provider?.isPhantom) {
      //provider is phantom
      ConnectToPhantom();
      return provider;
    }
  }

  window.open("https://phantom.app/", "_blank");
};

async function ConnectToPhantom(queueId) {
  try {
    const provider = window.phantom?.solana;

    const resp = await provider.connect();
    var solanaPublicKey = resp.publicKey.toString();
    // alert(solanaPublicKey);
    globalSolanaPublicKey = solanaPublicKey;
    return solanaPublicKey;
  } catch (e) {
    console.error(e);
    alert("Make sure you have Phantom installed and open");
  }

  //make a post request
  // var xhr = new XMLHttpRequest();
  // const functionsURL =
  //   "https://us-central1-sneks-83e56.cloudfunctions.net/app/phantom";
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4) {
  //     console.log(xhr.status);
  //   }
  // };
  // xhr.open("POST", functionsURL, true);
  // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  // xhr.send(JSON.stringify({ publicKey: solanaPublicKey, queueId: queueId }));
  // provider.on("connect", () => console.log("connected!"));
  // // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
  //FINALLY TELL THE NODE SERVER ON THE OTHER LINE IN A WEBSOCKET EVENT TO REMOVE THIS CLIENT FROM THE QUEUE
  //start a websocket connection
}

function getSolanaKey() {
  // alert(globalSolanaPublicKey);
  return globalSolanaPublicKey;
}
