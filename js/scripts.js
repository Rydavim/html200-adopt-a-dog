document.addEventListener("DOMContentLoaded", function(event){
  // alert dog's info on photo click
  function dogAlert(name, breed, fees) {
    alert("Name: " + name + "\nBreed: " + breed + "\nFees: " + fees);
  }

  // add adoption fees to total and alert
  let cartTotal = 0;
  function cartAdd(fees) {
    cartTotal = cartTotal + fees;
    alert("Cart Total: $" + cartTotal); // how to format with hundredths?
    return cartTotal;
  }

  // blog page article generation
  let blogPosts = [
    {
      image: 'images/blog-1.jpg',
      altText: 'A young man in a tan shirt and his medium-sized black dog sit overlooking a canyon.',
      heading3: 'Traveling With Your Dog',
      paragraph1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.', paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
      image: 'images/blog-2.jpg',
      altText: 'Several dogs on a single lead sitting attentively on a walk.',
      heading3: 'How To Walk Multiple Dogs',
      paragraph1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.', paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
      image: 'images/blog-3.jpg',
      altText: 'A woman and her dog are silhouetted in black with an orange sunset in the background.',
      heading3: 'Teach Your Dog To Fetch!',
      paragraph1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.', paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    }
  ];

  const blog = document.getElementById('blog');

  if (blog) { // ugly way to differentiate pages
    for (let i = 0; i < blogPosts.length; i++) {
      const blogPost = blogPosts[i];

      const storyDiv = document.createElement('div');
      storyDiv.setAttribute('class', 'story clearfix');

      const postImg = document.createElement('img');
      postImg.setAttribute('src', blogPost.image);
      postImg.setAttribute('alt', blogPost.altText);
      storyDiv.appendChild(postImg);

      const postHeading = document.createElement('h3');
      postHeading.textContent = blogPost.heading3;
      storyDiv.appendChild(postHeading);

      const postP1 = document.createElement('p');
      postP1.textContent = blogPost.paragraph1;
      storyDiv.appendChild(postP1);

      const postP2 = document.createElement('p');
      postP2.textContent = blogPost.paragraph2;
      storyDiv.appendChild(postP2);

      blog.appendChild(storyDiv);
    }
  }

  // alert on form submission & log values
  const form = document.getElementById('checkout-form');

  if (form) { // ugly way to differentiate pages
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Form Submitted!');

      
      console.log(form[i].value);
    });
  }
});
