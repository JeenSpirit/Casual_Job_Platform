import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRef, useEffect, useState } from "react"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, Container, FormControlLabel, Paper, TextField } from '@mui/material';


const USER_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = () => {
    const userRef = useRef()
    const pwdRef = useRef()
    const matchPwdRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
    const [isNameTyped, setIsNameTyped] = useState(false)

    const handleUser = (e) => {
        setUser(e.target.value)
        setIsNameTyped(true)
    }

    const handleUserFocus = () => {
        setUserFocus(true)
    }

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        setValidName(result)
    }, [user])

    const [pwd, setPwd] = useState('')
    const [pwdFocus, setPwdFocus] = useState(false)
    const [isPwdTyped, setIsPwdTyped] = useState(false)
    const [validPwd, setValidPwd] = useState({
        isLowercase: false,
        isUppercase: false,
        isNumber: false,
        isSpecialChar: false,
        isCorrectLength: false
    })
    const [pwdValidation, setPwdValidation] = useState(false)

    useEffect(() => {
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%]/;
        const lengthRegex = /.{8,24}/;
        const pwdValidation = PWD_REGEX.test(pwd)
        setValidPwd({
            isLowercase: lowercaseRegex.test(pwd),
            isUppercase: uppercaseRegex.test(pwd),
            isNumber: numberRegex.test(pwd),
            isSpecialChar: specialCharRegex.test(pwd),
            isCorrectLength: lengthRegex.test(pwd)
        })
        setPwdValidation(pwdValidation)
    }, [pwd])

    const handlePwdFocus = () => {
        setPwdFocus(true)
    }


    const [matchPwd, setMatchPwd] = useState('')
    const [isMatch, setIsMatch] = useState(false)
    const [isMatchTyped, setIsMatchTyped] = useState(false)
    const [matchPwdFocus, setMatchPwdFocus] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    const handlePwdChange = (e) => {
        setPwd(e.target.value)
        setIsPwdTyped(true)
    }

    const handleMatchPwd = (e) => {
        setMatchPwd(e.target.value)
        setIsMatchTyped(true)
    }

    const handleMatchPwdFocus = () => {
        setMatchPwdFocus(true)
    }


    useEffect(() => {
        const result = matchPwd === pwd
        setIsMatch(result)
    }, [matchPwd, pwd])

    const [privacyChecked, setPrivacyChecked] = useState(false)
    const [isNocheckSubmit, setIsNocheckSbumit] = useState(false)

    const handlePrivacyCheck = (e) => {
        setPrivacyChecked(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validName || !pwdValidation || !isMatch || !privacyChecked) {
            setUserFocus(true)
            setIsNameTyped(true)
            setPwdFocus(true)
            setIsPwdTyped(true)
            setMatchPwdFocus(true)
            setIsMatchTyped(true)

        }
        if (!validName) {
            userRef.current.focus()
            return
        } else if (!pwdValidation) {
            pwdRef.current.focus()
            return
        } else if (!isMatch) {
            matchPwdRef.current.focus()
            return
        } else if (!privacyChecked) {
            setIsNocheckSbumit(true)
            return
        }
        setIsNocheckSbumit(false)
        console.log('submit success');


    }

    return (
        <Container maxWidth='md'>
            <Paper elevation={6}>
                <Typography component='h1' variant='h5' align='center'>
                    Sign Up
                </Typography>
                <Box sx={{ padding: '10px' }} component='form' noValidate onSubmit={handleSubmit}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='email address'
                        name='email'
                        autoComplete='email'
                        onChange={handleUser}
                        onFocus={handleUserFocus}
                        error={user ? !validName : false}
                        inputRef={userRef}
                    />
                    {userFocus && !validName && user && <Typography sx={{ fontSize: 'small', padding: '5px', margin: '0px', color: 'red' }}>Please enter the corrent email address.</Typography>}
                    {userFocus && !user && isNameTyped && <Typography sx={{ fontSize: 'small', padding: '5px', margin: '0px', color: 'red' }}>email is required</Typography>}
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='password'
                        type='password'
                        label='password'
                        name='password'
                        error={pwd ? !pwdValidation : false}
                        onFocus={handlePwdFocus}
                        onChange={handlePwdChange}
                        inputRef={pwdRef}
                    />
                    {isPwdTyped && pwdFocus && !pwdValidation && pwd && <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '5px', margin: '0px', listStyleType: 'none' }}>
                        <li style={{ display: 'flex', alignItems: 'center', fontSize: 'small' }}>{validPwd.isLowercase ? <DoneIcon sx={{ color: 'green' }} /> : <CloseIcon sx={{ color: 'red' }} />} At least one lowercase letter </li>
                        <li style={{ display: 'flex', alignItems: 'center', fontSize: 'small' }}>{validPwd.isUppercase ? <DoneIcon sx={{ color: 'green' }} /> : <CloseIcon sx={{ color: 'red' }} />} At least one uppercase letter </li>
                        <li style={{ display: 'flex', alignItems: 'center', fontSize: 'small' }}>{validPwd.isNumber ? <DoneIcon sx={{ color: 'green' }} /> : <CloseIcon sx={{ color: 'red' }} />} At least one number </li>
                        <li style={{ display: 'flex', alignItems: 'center', fontSize: 'small' }}>{validPwd.isSpecialChar ? <DoneIcon sx={{ color: 'green' }} /> : <CloseIcon sx={{ color: 'red' }} />} At least one special character</li>
                        <li style={{ display: 'flex', alignItems: 'center', fontSize: 'small' }}>{validPwd.isCorrectLength ? <DoneIcon sx={{ color: 'green' }} /> : <CloseIcon sx={{ color: 'red' }} />} 8 to 24 characters in length </li>
                    </ul>
                    }
                    {isPwdTyped && pwdFocus && !pwd && <Typography sx={{ fontSize: 'small', padding: '5px', color: 'red' }}>Password is required.</Typography>}
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='matchPassword'
                        type='password'
                        label='confirm'
                        name='matchPassword'
                        onChange={handleMatchPwd}
                        onFocus={handleMatchPwdFocus}
                        error={matchPwd ? !isMatch : false}
                        inputRef={matchPwdRef}
                    />
                    {matchPwd && !isMatch && <Typography sx={{ fontSize: 'small', padding: '5px', margin: '0px', color: 'red' }}>The password you entered does not match.</Typography>}
                    {isMatchTyped && !matchPwd && matchPwdFocus && <Typography sx={{ fontSize: 'small', padding: '5px', color: 'red' }}>Password is required.</Typography>}
                    <FormControlLabel
                        control={<Checkbox
                            value='agree'
                            color='primary'
                            checked={privacyChecked}
                            onChange={handlePrivacyCheck}
                        />}
                        label='I agree to the privacy policy'
                    />
                    {!privacyChecked && isNocheckSubmit && <Typography sx={{ fontSize: 'small', padding: '5px', margin: '0px', color: 'red' }}>You must agree to the privacy policy</Typography>}
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                    >
                        Sign Up
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Register