const todoListMixin = {

    data() {
        return {
            m_newTodoItem: 'mixin-',
            m_placeholder: 'mixin-placeholder'
        }
    },

    methods: {
        m_test() {
            console.log('mixins: function test')
        }
    }

}

export default todoListMixin

