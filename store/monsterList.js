export const state = () => ({
    monsters: [
        {
            name: 'Diablos',
            icon: '/icons/MHW-Diablos_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/7/75/MHW-Diablos_Render_001.png/revision/latest?cb=20180201020240',
            type: 'Flying Wyvern',
            element: 'Earth',
            habitat: 'Wildspire Waste',
            price: 3.99,
            discounted: 2.99
        },
        {
            name: 'Black Diablos',
            icon: '/icons/MHW-Black_Diablos_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/d/dc/MHW-Black_Diablos_Render_001.png/revision/latest?cb=20180228105958',
            type: 'Flying Wyvern',
            element: 'Earth',
            habitat: 'Wildspire Waste',
            price: 4.99
        },
        {
            name: 'Kirin',
            icon: '/icons/MHW-Kirin_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/f/f5/MHW-Kirin_Render_001.png/revision/latest?cb=20180307103956',
            type: 'Elder Dragon',
            element: 'Thunder',
            habitat: 'Coral Highlands',
            price: 10.99,
            discounted: 8.99
        },
        {
            name: 'Azure Rathalos',
            icon: '/icons/MHW-Azure_Rathalos_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/50/MHW-Azure_Rathalos_Render_001.png/revision/latest?cb=20190411144639',
            type: 'Flying Wyvern',
            element: 'Fire',
            habitat: 'Ancient Forest',
            price: 7.99,
            discounted: 7.59
        },
        {
            name: 'Teostra',
            icon: '/icons/MHW-Teostra_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/e/e0/MHW-Teostra_Render_001.png/revision/latest?cb=20180111134020',
            type: 'Elder Dragon',
            element: 'Fire',
            habitat: 'Coral Highlands',
            price: 12.99,
            discounted: 9.99
        },
        {
            name: 'Lunastra',
            icon: '/icons/MHW-Lunastra_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/f/f8/MHW-Lunastra_Render_001.png/revision/latest?cb=20180530122508',
            type: 'Elder Dragon',
            element: 'Fire',
            habitat: 'Coral Highlands',
            price: 12.99,
            discounted: 9.99
        },
        {
            name: 'Nergigante',
            icon: '/icons/MHW-Nergigante_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/8/89/MHW-Nergigante_Render_001.png/revision/latest?cb=20190914060417',
            type: 'Elder Dragon',
            element: 'None',
            habitat: 'Great Ravine',
            price: 10.99
        },
        {
            name: 'Vaal Hazak',
            icon: '/icons/MHW-Vaal_Hazak_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/5/54/MHW-Vaal_Hazak_Render_001.png/revision/latest?cb=20180214002433',
            type: 'Elder Dragon',
            element: 'None',
            habitat: 'Rotten Vale',
            price: 10.99
        },
        {
            name: 'Ancient Leshen',
            icon: '/icons/MHW-Ancient_Leshen_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9f/MHW-Ancient_Leshen_Render_001.png/revision/latest?cb=20191126211836',
            type: 'Relict',
            element: 'None',
            habitat: 'Ancient Forest',
            price: 7.99,
            discounted: 4.99
        },
        {
            name: 'Xenojiiva',
            icon: '/icons/MHW-Xeno\'jiiva_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/2/2f/MHW-Xeno%27jiiva_Render_001.png/revision/latest?cb=20190412154741',
            type: 'Elder Dragon',
            element: 'None',
            habitat: 'Confluence of Fate',
            price: 15.99
        },
        {
            name: 'Kulve Taroth',
            icon: '/icons/MHW-Kulve_Taroth_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/0/00/MHW-Kulve_Taroth_Render_002.png/revision/latest?cb=20180419051425',
            type: 'Elder Dragon',
            element: 'Fire',
            habitat: 'Caverns of El Dorado',
            price: '25.00'
        },
        {
            name: 'Dodogama',
            icon: '/icons/MHW-Dodogama_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/d/d3/MHW-Dodogama_Render_001.png/revision/latest?cb=20180111125129',
            type: 'Fanged Wyvern',
            element: 'None',
            habitat: 'Elder\`s Recess',
            price: '17.99'
        },
        {
            name: 'Odogaron',
            icon: '/icons/MHW-Odogaron_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9f/MHW-Odogaron_Render_001.png/revision/latest?cb=20171112161310',
            type: 'Fanged Wyvern',
            element: 'None',
            habitat: 'Rotten Vale',
            price: '10.99'
        },
        {
            name: 'Bazelgeuse',
            icon: '/icons/MHW-Bazelgeuse_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9f/MHW-Odogaron_Render_001.png/revision/latest?cb=20171112161310',
            type: 'Flying Wyvern',
            element: 'Fire',
            habitat: 'Wildspire Waste',
            price: '18.99'
        },
        {
            name: 'Deviljho',
            icon: '/icons/MHW-Deviljho_Icon.png',
            // image: 'https://vignette.wikia.nocookie.net/monsterhunter/images/9/9f/MHW-Odogaron_Render_001.png/revision/latest?cb=20171112161310',
            type: 'Fanged Wyvern',
            element: 'Dragon',
            habitat: 'Ancient Forest',
            price: '23.99'
        }
    ]
})

export const getters = {
    getMonsters: (state) => {
        return state.monsters
    }
}