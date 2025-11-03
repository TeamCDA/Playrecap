export default class Profile{
    id: number;
    created_at: string;
    username: string;
    isPrivate: boolean;


    constructor(
        id: number,
        created_at: string,
        name: string,
        isPrivate: boolean,
    ){
        this.id = id;
        this.created_at = created_at
        this.username = name;
        this.isPrivate = isPrivate;

    }


}