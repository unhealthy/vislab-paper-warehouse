import mdl from 'material-design-lite/material.js';
import 'material-design-lite/src/material-design-lite.scss';

export default {
    ready() {
        for (let i = 0, len = this.paperTags.length; i < len; ++i) {
            this.paperTagsHash[this.paperTags[i]] = true;
            this.selectedTags.push(this.paperTags[i]);
        }
        this.$nextTick(() => {
            mdl.upgradeDom();
        });
    },
    data() {
        return {
            paperID: 0,
            newTag: null,
            paperTags: ['info vis', 'narrative', 'urban'],
            paperTagsHash: {},
            selectedTags: []
        };
    },
    methods: {
        updatePaperInfo() {

        },
        addTag() {
            if (typeof this.newTag === 'string' && this.newTag.length > 0) {
                if (typeof this.paperTagsHash[this.newTag] !== 'undefined') return;
                this.paperTagsHash[this.newTag] = true;
                this.paperTags.push(this.newTag);
                this.selectedTags.push(this.newTag);
                this.$nextTick(() => {
                    mdl.upgradeElement(this.$el.querySelector('#list-item-' + (this.paperTags.length - 1) + ' .mdl-js-checkbox'));
                    this.newTag = null;
                });
            }
        }
    }
};
