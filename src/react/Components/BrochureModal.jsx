import React, { useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Swal from 'sweetalert2';

const BrochureModal = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        role: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            Swal.fire("Error", "Please verify that you are not a robot.", "error");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('/api/brochure', {
                ...formData,
                recaptchaToken: captchaToken
            });

            if (response.data.response) {
                Swal.fire("Success", "Your brochure request has been submitted! Please check your email.", "success");
                onClose();
                setFormData({
                    title: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    role: ''
                });
            } else {
                Swal.fire("Error", response.data.data || "Something went wrong.", "error");
            }
        } catch (error) {
            console.error("Brochure request error:", error);
            Swal.fire("Error", error.response?.data?.data || "Internal Server Error", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}><X size={24} /></CloseButton>
                <ModalHeader>
                    <Title>Download Brochure</Title>
                    <Subtitle>Fill in your details to receive the BFA 2026 event brochure.</Subtitle>
                </ModalHeader>

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <FormGroup style={{ flex: '0 0 100px' }}>
                            <Label>Title*</Label>
                            <Select name="title" required value={formData.title} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                                <option value="Doc">Doc</option>
                                <option value="Prof">Prof</option>
                            </Select>
                        </FormGroup>
                        <FormGroup style={{ flex: 1 }}>
                            <Label>First Name*</Label>
                            <Input name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="John" />
                        </FormGroup>
                    </Row>

                    <FormGroup>
                        <Label>Last Name*</Label>
                        <Input name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Doe" />
                    </FormGroup>

                    <Row>
                        <FormGroup style={{ flex: 1 }}>
                            <Label>Email Address*</Label>
                            <Input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                        </FormGroup>
                        <FormGroup style={{ flex: 1 }}>
                            <Label>Phone Number*</Label>
                            <Input name="phone" required value={formData.phone} onChange={handleChange} placeholder="+44 123 456 7890" />
                        </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup style={{ flex: 1 }}>
                            <Label>Company Name*</Label>
                            <Input name="companyName" required value={formData.companyName} onChange={handleChange} placeholder="Fintech Ltd" />
                        </FormGroup>
                        <FormGroup style={{ flex: 1 }}>
                            <Label>Job Role</Label>
                            <Input name="role" value={formData.role} onChange={handleChange} placeholder="CEO / Director" />
                        </FormGroup>
                    </Row>

                    <FormGroup style={{ marginTop: '10px' }}>
                        <ReCAPTCHA
                            sitekey="6LdxNigqAAAAAJ6jU9uuhEtrAw-s8J_qnsGCVvj5"
                            onChange={(token) => setCaptchaToken(token)}
                        />
                    </FormGroup>

                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Request Brochure'}
                    </SubmitButton>
                </Form>
            </ModalContent>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(4px);
    padding: 20px;
`;

const ModalContent = styled.div`
    background: #ffffff;
    width: 100%;
    max-width: 550px;
    border-radius: 20px;
    padding: 40px;
    position: relative;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    animation: slideUp 0.3s ease-out;

    @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: #f7f9fc;
    border: 1px solid #e3e8ee;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    color: #4f566b;
    transition: all 0.2s;
    &:hover { background: #fee; color: #f44; border-color: #fcc; }
`;

const ModalHeader = styled.div`
    margin-bottom: 30px;
`;

const Title = styled.h2`
    font-size: 28px;
    font-weight: 800;
    color: #010057;
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
    color: #697386;
    font-size: 14px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Row = styled.div`
    display: flex;
    gap: 16px;
    @media (max-width: 480px) { flex-direction: column; }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const Label = styled.label`
    font-size: 13px;
    font-weight: 700;
    color: #1a1f36;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

const Input = styled.input`
    padding: 12px 16px;
    border: 1px solid #e3e8ee;
    border-radius: 10px;
    font-size: 14px;
    outline: none;
    transition: all 0.2s;
    &:focus { border-color: #635bff; box-shadow: 0 0 0 3px rgba(99,91,255,0.1); }
`;

const Select = styled.select`
    padding: 12px 16px;
    border: 1px solid #e3e8ee;
    border-radius: 10px;
    font-size: 14px;
    outline: none;
    background-color: #fff;
    &:focus { border-color: #635bff; }
`;

const SubmitButton = styled.button`
    margin-top: 10px;
    padding: 16px;
    background: #635bff;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover { background: #010057; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(99,91,255,0.3); }
    &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
`;

export default BrochureModal;
