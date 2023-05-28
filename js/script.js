document.addEventListener('DOMContentLoaded', () => {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 30000,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 200,
            depth: 50,
            modifier: 1,
            scale: 0.85,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 'true',
        },

    })

    const books = storeBooks()
    const converter = converterTags()
    const library = document.getElementsByClassName("wrapper-library")[0];
    books.forEach(book => {

        const single_library = Object.assign(
            document.createElement('a'),
            {className: 'single-library',
            href:'#'}
        )

        single_library.appendChild(
            Object.assign(
                document.createElement('div'),
                {className: 'library-image'}
            )
        ).appendChild(
            Object.assign(
                document.createElement('img'),
                {
                    src: book.cover,
                    alt: book.title
                }
            )
        )

        let single_title = Object.assign(
            document.createElement('h6'),
            {innerHTML: book.title}
        )


        let tags_container = Object.assign(
            document.createElement('div'),
            {className: 'tags-library'}
        )

        book.tags.forEach(tag => {
            tags_container.appendChild(
                Object.assign(
                    document.createElement('div'),
                    {
                        className: tag + " tag",
                        innerHTML: converter[tag]
                    }
                )
            )
        })

        let single_bottom = Object.assign(
            document.createElement('div'),
            {className: 'single-bottom'}
        )
        single_bottom.appendChild(single_title)
        single_bottom.appendChild(tags_container)

        single_library.appendChild(single_bottom)

        const single = document.createElement('li')
        single.appendChild(single_library)

        library.appendChild(single)
    })

    const buttons = document.getElementsByClassName("question");
    for (button of buttons) {
        button.addEventListener('click', function() {
            const state = this.parentElement.children[1].style.display
            if (state ==="none"){
                this.parentElement.children[1].style.display = "flex"
            }
            else{
                this.parentElement.children[1].style.display = "none"
            }
        });
    }



})


function storeBooks() {
    return [
        {
            title: "Volcanic Age",
            cover: "image/books/volcanic.png",
            tags: [
                "aventure",
                "action",
                "art_martiaux"
            ]
        },

        {
            title: "Solo Leveling",
            cover: "image/books/solo.png",
            tags: [
                "aventure",
                "action",
                "donjon"
            ]
        },

        {
            title: "The Archmage Returns After 4000 Years",
            cover: "image/books/archmage.png",
            tags: [
                "aventure",
                "action",
                "fantaisie"
            ]
        },

        {
            title: "Lecteur Omniscient",
            cover: "image/books/lecteur.png",
            tags: [
                "aventure",
                "action",
                "donjon"
            ]
        },

        {
            title: "Legend of the Northern Blade",
            cover: "image/books/legend.png",
            tags: [
                "aventure",
                "action",
                "art_martiaux"
            ]
        },

        {
            title: "Return of the Frozen Player",
            cover: "image/books/frozen.png",
            tags: [
                "aventure",
                "action",
                "donjon"
            ]
        }
    ]
}

function converterTags() {
    return {
        aventure: "Aventure",
        action: "Action",
        art_martiaux: "Art Martiaux",
        donjon: "Donjon",
        fantaisie: "Fantaisie",
    }
}
