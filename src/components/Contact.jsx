import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState({})

    const validate = () => {
        let errors = {}
        if (!formData.name) errors.name = 'Name is required'
        if (!formData.email) errors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid'
        if (!formData.message) errors.message = 'Message is required'
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate()
        if (Object.keys(errors).length > 0) {
            setErrors(errors)
        } else {
            setErrors({})
            setSuccess(true)
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setSuccess(false), 3000)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section className="contact" id="contact">
            <div className="contact-header">
                <span className="eyebrow">GET IN TOUCH</span>
                <h2>Contact Us</h2>
            </div>
            <div className="contact-form-wrapper">
                {success && <div className="success-msg"> Message sent successfully!</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows="5"></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact