# NoSqlTp

Study project on NoSQL databases, using PHP 8.2 and XAMPP to run the PouchDB database.

## Installation

### 1. Install brew (MacOS)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Read step displayed in the terminal. for finalizing the installation.

Read more about brew installation [here](https://brew.sh/).

#### Brew Requirements

> Read more about brew requirements [here](https://docs.brew.sh/Installation#macos-requirements).

### 2. Install XAMPP using Brew (MacOS)

1. Install XAMPP
    ```bash
    brew install --cask xampp
    ```
   Read more about XAMPP installation by brew [here](https://formulae.brew.sh/cask/xampp). <br>
   Read more about XAMPP installation [here](https://www.apachefriends.org/download.html). <br>
   <br>
2. Start XAMPP

   #### 2 options:
    - Start XAMPP using the GUI
        ```bash
        open /Applications/XAMPP/xamppfiles/manager-osx.app
        ```
    - Start XAMPP using the terminal
      ```bash
      sudo /Applications/XAMPP/xamppfiles/xampp start
      ```
      > Note: You will be asked to enter your password.
      <br>
      ##### Liste of XAMPP commands
      ```bash
        sudo /Applications/XAMPP/xamppfiles/xampp start # Start XAMPP
      ```
      ```bash
        sudo /Applications/XAMPP/xamppfiles/xampp stop # Stop XAMPP
      ```
        ```bash
        sudo /Applications/XAMPP/xamppfiles/xampp restart # Restart XAMPP
        ```
      ```bash
      sudo /Applications/XAMPP/xamppfiles/xampp status # Check XAMPP status
      ```
      ```bash 
      sudo /Applications/XAMPP/xamppfiles/xampp # Display XAMPP help for more commands
      ```
        <br>
## 3. Install project to run it
1. Create a symbolic link to the XAMPP htdocs folder
    ```bash
    ln -s /Applications/XAMPP/xamppfiles/htdocs/ ~/Desktop/htdocs
    ```
   > Note: You can change the destination of the symbolic link to any folder you want.
   <br>
   <br>
2. Open htDocs folder in Finder
    ```bash
    open ~/Desktop/htdocs
    ```
    > Note: You can change the destination of the symbolic link to any folder you want.

3. Create a new folder in htDocs folder
    ```bash
    mkdir ~/Desktop/htdocs/NoSqlTp
    ```
   > Note: You can change the destination of the symbolic link to any folder you want.

4. Clone the project in the new folder
    > if you don't have git installed, you can install it using brew
    ```bash
    brew install git
    ```
   ##### http clone
    ```bash
    git clone https://github.com/Narigane3/NoSqlTp.git
    ```
   ##### ssh clone
    ```bash
    git clone git@github.com:Narigane3/NoSqlTp.git
    ```

5. Open the project in your web browser
    ```bash
    open http://localhost/NoSqlTp
    ```
   > Note: You can change the destination of the symbolic link to any folder you want.
