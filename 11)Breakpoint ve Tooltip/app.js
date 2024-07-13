// Breakpoint ve Tooltip Nedir?

/*

--- BREAKPOINT (Hata Ayıklama Noktası) ---
Breakpoint, bir geliştiricinin kodun belirli bir satırında yürütmeyi durdurmasına olanak tanıyan hata ayıklama aracıdır. Bu, kodun belirli bir noktasında ne olduğunu incelemenizi, değişkenlerin değerlerini kontrol etmenizi ve adım adım kodu izlemenizi sağlar. Breakpoint'ler genellikle tarayıcıların geliştirici araçlarında veya bağımsız hata ayıklama araçlarında ayarlanabilir.
- debugger; kodu ile yürütmenin nereden başlanacağı seçilir.
- Tarayıcıdayken incele diyerek Sources bölümünden manuel yürütme yaparak hata tespit edilir. 

*/

debugger;
let a = 10;
let b = 15;
let c = a+b;
let d = a+b+c;

let e = a+c+b;

let sonuc = a+b+c+d+e;
console.log("Sonuç" , sonuc);


/*

--- TOOLIP ---
Tooltip, kullanıcıların bir öğe üzerine geldiklerinde (genellikle fareyle) görünen küçük bilgi balonlarıdır. Tooltip'ler genellikle ek bilgi sağlamak veya bir kullanıcı arabirimi öğesinin işlevini açıklamak için kullanılır. HTML ve CSS ile kolayca oluşturulabilir ve JavaScript ile dinamik hale getirilebilir.

*/


