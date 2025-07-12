import express, {Request, Response} from 'express';

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// write a function to remove repeated elements in an array
// input : [a, a, b, s, i, r, f, g, h, f]
// output : [b, s, i, r, g, h]

function removeElem (input: Array<any>) {
    const output: Array<any> = [];

    input.forEach(element => {
        const fil = input.filter(item => item == element);
        if(fil.length == 1) output.push(element); 
    });

    return output;
}

const response = removeElem(['a', "a", 'b', 's', 'i', 'r', 'f', 'g', 'h', 'f']);
console.log(response);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});