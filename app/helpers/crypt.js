const ENCRYPT=(information)=>{
  let word = btoa(information)
  return word
}
const DECRYPT=(information)=>{
  let word = atob(information)
  return word
}

export default{
	ENCRYPT,
	DECRYPT,
};
