function ValidateEmail(mail) 
{
 if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}

let obj = {
    ValidateEmail
}

console.log('mail')
export default obj





