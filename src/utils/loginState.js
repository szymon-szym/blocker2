export async function checkIsLogged() {
    const tokens = await browser.storage.sync.get("tokens");
    if (Object.keys(tokens).length === 0) {
      console.log("no tokens found in local storage");
      return false;
    }
    // console.log(`token: ${JSON.stringify(tokens)}`);
    if (Number(tokens.tokens.expire_at) > Date.now()) {
      console.log("access token not expired");
      return true;
    }
    console.log(`expire at: ${tokens.tokens.expire_at} curr: ${Date.now()}`);
    console.log("access token expired, refreshing - to be implemented");
    await clearStoredData();
    //refreshToken(refreshToken)
    return true;
  }
  export async function logout() {
    const fetch = window.fetch.bind(window);
    try {
      const tokens = await browser.storage.sync.get("tokens");
      const accessToken = tokens?.tokens.AccessToken;
      const params = {
        AccessToken: accessToken,
      };

      const logoutResponse = await fetch(
        "https://cognito-idp.us-west-2.amazonaws.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-amz-json-1.1",
            "X-Amz-Target": "AWSCognitoIdentityProviderService.GlobalSignOut",
          },
          body: JSON.stringify(params),
        }
      );
      await logoutResponse.json();
      await clearStoredData();
    } catch (e) {
      console.log(`could not log out ${e}`);
    }
  }
  export async function clearStoredData() {
    await browser.storage.sync.remove("tokens");
    await browser.storage.sync.remove("userEmail");
    await browser.storage.sync.remove("userName");
    // this.userName = null;
  }
  export async function login(uname, psw) {
    //! test
    const fetch = window.fetch.bind(window);
    const params = {
      AuthParameters: {
        // USERNAME: "szym",
        // PASSWORD: "zaq1@WSX",
        USERNAME: uname,
        PASSWORD: psw,
      },
      AuthFlow: "USER_PASSWORD_AUTH",
      //! move to env
      ClientId: "1rh7dr1vdiviu7k87fh9vm18q6",
    };

    const authResponse = await fetch(
      //! move to env
      "https://cognito-idp.us-west-2.amazonaws.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
        },
        body: JSON.stringify(params),
      }
    );
    const authData = await authResponse.json();
    const tokens = authData.AuthenticationResult;
    Object.assign(tokens, { expire_at: `${Date.now() + 3600 * 1000}` });
    await browser.storage.sync.set({ tokens });
    return tokens.AccessToken;
    // await getUser();
    // await this.checkIsLogged();
  }
  export async function getUser(accessToken) {
    const userResponse = await fetch(
      "https://cognito-idp.us-west-2.amazonaws.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-amz-json-1.1",
          "X-Amz-Target": "AWSCognitoIdentityProviderService.GetUser",
        },
        body: JSON.stringify({ AccessToken: accessToken }),
      }
    );
    const userData = await userResponse.json();
    console.log(userData);
    const currUserName = userData.Username;
    const currUserEmail = userData.UserAttributes.find(
      (x) => x.Name === "email"
    ).Value;
    await browser.storage.sync.set({
      userName: currUserName,
      userEmail: currUserEmail,
    });
    return currUserName
    // this.userName = currUserName;
  }