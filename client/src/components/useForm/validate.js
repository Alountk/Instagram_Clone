export const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Campo obligatorio'
    }
    if (!values.email) {
        errors.email = 'Campo obligatorio'
    }
    return errors
}