export class post {
    // titre
    title: string;

    // Contenu
    content: string;

    // Nombre de like
    loveIts: number;

    // date de création
    created_at: Date;

    // Constructeur par défaut
    constructor(title:string,
            content:string,
            loveits:number)
    {
        this.title = title;
        this.content = content;
        this.loveIts = loveits;
        this.created_at = new Date();
    }
}