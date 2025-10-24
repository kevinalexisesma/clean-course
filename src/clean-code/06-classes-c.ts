(() => {

    // Aquí se alicará el principio de responsabilidad única
    console.log('BBBBB');
    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate   : Date;
        gender      : Gender;
        name        : string;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        birthdate   : Date;
        email       : string;
        gender      : Gender;
        name        : string;
        role        : string;
    }

    class User extends Person {
        
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor( {email, role, name, gender, birthdate}: UserProps ){            
            super({ name, gender, birthdate });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }


    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder  : string;
        
        constructor({workingDirectory,lastOpenFolder,email,role,name,gender,birthdate}: UserSettingsProps) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });
    
    console.log({ userSettings });


})();