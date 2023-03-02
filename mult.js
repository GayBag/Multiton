class Multiton {
 static #objects_quantity = 3;
 static #flag = false;
 static #count = 0;
 static #creation_count = 0;
 static #instance = [];
 constructor ()
    {
        if (!Multiton.#flag)
        {
            throw new Error ("Can't create an object");
        }
    }
 static createInstance ()
 {
        Multiton.#creation_count++;
        if (Multiton.#count < Multiton.#objects_quantity)
        {
        Multiton.#flag = true; 
        Multiton.#instance.push(new Multiton());
        Multiton.#count++;
        Multiton.#flag = false;
        return Multiton.#instance[Multiton.#count-1];
        }
        else
        {
        if (Multiton.#creation_count % Multiton.#count === 0)
        {
        return Multiton.#instance[( Multiton.#count-1)];
        }
        {
        return Multiton.#instance[( Multiton.#creation_count % Multiton.#count) -1];
        }
        }
 }   

}
