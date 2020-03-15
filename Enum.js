/** Enum in Javascript
 *  We define a variable and use Object.freeze()
 */
const SOCIALS = Object.freeze({
  TWITTER: "Twitter",
  LINKEDIN: "Linkedin",
  FACEBOOK: "Facebook",
  INSTAGRAM: "Instagram",
  GITHUB: "Github",
  DEVTO: "Devto"
});

const mySocial = SOCIALS.TWITTER;
SOCIALS.TWITTER = "TikTok"; //*this fails silently*
console.log(mySocial); //Twitter

//Warning: 
//Doesn't prevent the assignment of a value to a variable!
let test = SOCIALS.GITHUB;
test = "Bitbucket";
console.log(test); //Bitbucket