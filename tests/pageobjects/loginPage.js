export class LoginPage{

constructor(page)
{
 this.page=page   
 this.userName=page.locator("#userEmail")
 this.password=page.locator("#userPassword")
 this.sigin=page.locator("[value='Login']")


}

async url()
{
    await this.page.goto("https://rahulshettyacademy.com/client")
}

async validation (userName,password)
{
    await this.userName.fill(userName)
    await this.password.fill(password)
    await this.sigin.click();

}


}