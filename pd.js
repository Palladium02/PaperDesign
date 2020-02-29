(function(window) {

    class PaperDesignTabbar {
        constructor(tabbar) {
            this.element = tabbar;
            this.children = Array.from(this.element.children);
            this.activeTab = null;
            //this.tabTemplate = `<div class="pd-tabbar-tab"></div>`;
            Array.from(this.children).forEach(child => {
                child.addEventListener('click', (event) => {
                    if(event.target.classList.contains('active')) {
                        event.target.classList.remove('active');
                        this.activeTab = null;
                    } else {
                        if(this.activeTab) {
                            this.activeTab.classList.remove('active');
                        }
                        event.target.classList.add('active');
                        this.activeTab = event.target;
                    }
                });
            });
        }

        push(tabText, index) {
            let tab = document.createElement('div');
            tab.classList.add('pd-tabbar-tab');
            let text = document.createTextNode(tabText);
            tab.appendChild(text);
            if(index) {
                this.element.insertBefore(tab, this.element.children[index + 1]);
                this.children.splice(index + 1, 0, tab);
            } else {
                this.element.appendChild(tab);
                this.children.push(tab);
            }
            tab.addEventListener('click', (event) => {
                if(event.target.classList.contains('active')) {
                    event.target.classList.remove('active');
                    this.activeTab = null;
                } else {
                    if(this.activeTab) {
                        this.activeTab.classList.remove('active');
                    }
                    event.target.classList.add('active');
                    this.activeTab = event.target;
                }
            });
            
            return;
        }

        pop(index) {
            if(index) {
                console.log(this.element.children[index]);
                this.element.removeChild(this.element.children[index]);
                this.children.splice(index, index);
            } else {
                this.element.removeChild(this.children.pop());
            }
        }

    }

    //auto init of tabbar components
    window.PaperDesignTabbars = [];
    let tabbars = document.querySelectorAll('.pd-tabbar');
    tabbars.forEach(tabbar => {
        window.PaperDesignTabbars.push(new PaperDesignTabbar(tabbar));
    });

    

    
})(window);