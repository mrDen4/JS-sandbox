class One {
    print() {
        console.log('one!');
    }
}

class Two extends One {
    print() {
        super.print();
        console.log('two!');
    }
}

let print = new Two();
print.print();