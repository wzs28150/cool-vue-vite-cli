import { computed, ref, defineComponent } from 'vue'
export default function () {
    function initWow() {
        let wow = new WOW({
            live: true,
            offset: 0,
            scrollContainer: '#app>.c-scrollbar>.c-scrollbar-wrap',
        });
        wow.init();
        wow.sync();
        document.querySelector('#app>.c-scrollbar>.c-scrollbar-wrap').addEventListener('scroll', (e) => {
            if (e.target.scrollTop == 0) {
                wow.init();
            }
        });
    }
    return {
        initWow
    }
}