import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import Button from '@mui/material/Button';

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;

        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );

        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Name
                <input type="text" name="name" className={css.input} />
            </label>
            <label className={css.label}>
                Email
                <input type="email" name="email" className={css.input} />
            </label>
            <label className={css.label}>
                Password
                <input type="password" name="password" autoComplete="off" className={css.input} />
            </label>
            <Button variant="contained" type="submit" className={css.btn}>Register</Button>
        </form>
    )
}

export default RegistrationForm;