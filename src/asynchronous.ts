

type Something = {something: string}

const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
        const data: Something = {something: "something"};

        if(data){
            resolve(data);
        }else{
            reject("Data is empty");
        }
    })
}

// calling create promise function 
const showData = async (): Promise<Something> => {
    const data:Something = await createPromise();
    return data;
}

// showData();


interface User {
    name: string;
    age: number;
}

const userData : User[] = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Mike', age: 35}
];

const fetchUserData = (userId: number): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = userData[userId]
            if(user){
                resolve(user);
            }else{
                reject(`No user found with id: ${userId}`);
            }
        }, 2000);
    })
}


const displayUser = async(userId: number): Promise<void> => {
    try {
        const user = await fetchUserData(userId);
        console.log(`user found!`)
    } catch (error) {
        console.error('Error!');
    }
}

console.log(displayUser(0))
console.log(displayUser(5))