import './example.scss';

class AdvertisitingBlock {
    constructor(rootElement = document.querySelector('body')) {
        this.rootElement = rootElement;
        this.tasks = [
            {
                "title": "Time to Share: 6 for $3.99*",
                "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640170/comp_plate_promo1_wsmolg.png",
                "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640170/comp_plate_promo1_wsmolg.png"
              },
              {
                "title": "Rise 'n shine",
                "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo2_nlqjfe.png",
                "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo2_nlqjfe.png"
              },
              {
                "title": "PM Snackers: Brownie Bites",
                "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png",
                "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png"
              }
        ]
        this.render()
    }

render() {
 this.renderImages()
}

renderImages() {
    this.titleContainer = document.createElement('div');
    this.titleContainer.classList.add('titleContainer')
    for (let task of this.tasks) {
        const title = document.createElement('h2');
        title.innerHTML = task.title;
        // image.innerHTML = `src =${task.img}`;
        title.classList.add('titleContainer__title')
        this.titleContainer.appendChild(title);
    }
    this.rootElement.appendChild(this.titleContainer);

}


}


const advertistingBlock = new AdvertisitingBlock();