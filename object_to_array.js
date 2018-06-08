Stwórz funkcję która przyjmie obiekt i zamieni go na tablicę:
 objectToArray({ a: 1, b: 2 }) //=> [['a', 1], ['b', 2]] objectToArray({ foo: 'bar' }) //=> [['foo', 'bar']]
Przyda Ci się metoda Object.keys, która zwraca klucze danego obiektu jako tablicę, np. Object.keys({ foo: 'bar' }) //=> ['foo'].
Pamiętaj, że dostęp do elementów obiektu możesz uzyskiwać na dwa sposoby, tj. obj['foo'] === obj.foo.
