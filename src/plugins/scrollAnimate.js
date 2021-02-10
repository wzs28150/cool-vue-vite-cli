export default class vScroll {
    handleSetClassName = (el, binding) => {
        const {
            value
        } = binding
        // console.log(value);
        value.unshift('animated')
        if (el.className.indexOf('animated') < 0) {
            el.className += ' ' + value.join(' ')
            el.style.animationDelay = `${el.getAttribute('delay')}s`
        }

    }

    handleRemoveClassName = (el, binding) => {
        const {
            value
        } = binding
        // Array.prototype.indexOf = function (val) {
        //     for (var i = 0; i < this.length; i++) {
        //         if (this[i] == val) return i;
        //     }
        //     return -1;
        // };
        Array.prototype.remove = function (val) {
            var index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        };
        // console.log(value[0]);
        // console.log(el.className.split(" "));
        if (el.className.indexOf('animated') > 0) {
            let arr = el.className.split(" ");
            arr.remove('animated')
            arr.remove(value[0])
            console.log(arr);
            el.className = arr.join(" ")
        }
        // console.log(value);
    }

    handlePositionData = (el, binding) => {
        const pos = el.getBoundingClientRect()
        const {
            top
        } = pos
        // console.log(pos);
        const sl = document.getElementsByClassName('c-scrollbar-wrap')[0].scrollTop

        const vh = document.documentElement.clientHeight
        console.log('sl:', sl, 'top:', top, 'vh:', vh, 'sl+vh', sl + vh);
        if (top + 200 <= sl + vh) {
            el.style.visibility = 'visible'
            this.handleSetClassName(el, binding)
        } else {

            el.style.visibility = 'hidden'
            // this.handleRemoveClassName(el, binding)
        }
        // const {top,left,right,bottom}=pos
    }
    handleAddScrollListener = (el, binding) => {
        // let that = this
        // that.handlePositionData(el, binding)
        // document.getElementsByClassName('c-scrollbar-wrap')[0].addEventListener('scroll', function () {
        //     console.log(document.getElementsByClassName('c-scrollbar-wrap').scrollY);
        //     // that.handlePositionData(el, binding)
        // })
        let contener = document.getElementsByClassName('c-scrollbar-wrap')[0]
        let f = function (evt) {
            console.log(binding);
            // if (binding.value(evt, el)) {
            //     contener.removeEventListener('scroll', f)
            // }
        }
        contener.addEventListener('scroll', f)
    }

};