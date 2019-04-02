;(() => {
        const $date = document.querySelector('.nowDate');
        const nowDate = new Date();
        const nextDate = new Date(nowDate.setDate(nowDate.getDate() + 1)).getDate();
        const parkingClass = nextDate & 1 ? 'even' : 'odd';

        const $parking = document.querySelector('.imgParking');
        $parking.classList.add(parkingClass);
    }
)
();
