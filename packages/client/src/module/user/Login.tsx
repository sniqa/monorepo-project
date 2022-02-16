import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Button, Checkbox, Divider, FormControlLabel, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react'

const LOGIN_FORM_TITLE = '登录'
const ACCOUNT_INPUT_BOX_LABEL = '请输入账号'
const PASSWORD_INPUT_BOX_LABEL = '请输入密码'
const LOGIN_BUTTON_LABEL = '登录'
const REMEMBER_CHECKBOX_LABEL = '记住密码'
const AUTO_LOGIN_CHECKBOX_LABEL = '自动登录'
const FORGET_PASSWORD_BUTTON_LABEL = '忘记密码?'

enum LocalStrogeCheckboxStateKeyName {
	IS_AUTO_REMEMBER = 'IS_AUTO_REMEMBER',
	IS_AUTO_LOGIN = 'IS_AUTO_LOGIN',
}

interface UserState {
	account: string
	password: string
}

interface LoginProps {
	onSubmit: (userinfo: UserState) => void
}

const localStorage = window.localStorage

interface CheckboxState {
	isAutoLogin: boolean
	isAutoRemember: boolean
}

const localStorageChexkboxsState: CheckboxState = {
	isAutoLogin: Boolean(localStorage.getItem(LocalStrogeCheckboxStateKeyName.IS_AUTO_LOGIN)),
	isAutoRemember: Boolean(localStorage.getItem(LocalStrogeCheckboxStateKeyName.IS_AUTO_REMEMBER)),
}

export default function Login(props: LoginProps) {
	const { onSubmit } = useMemo(() => props, [])

	const [values, setValues] = useState<UserState>({
		account: '',
		password: '',
	})

	const [showPassword, setShowPassword] = useState(false)

	const [checkBoxState, setCheckBoxState] = useState(localStorageChexkboxsState)

	useEffect(() => {
		return () => {
			localStorage.setItem(LocalStrogeCheckboxStateKeyName.IS_AUTO_REMEMBER, String(checkBoxState.isAutoRemember))
			localStorage.setItem(LocalStrogeCheckboxStateKeyName.IS_AUTO_LOGIN, String(checkBoxState.isAutoLogin))
		}
	}, [])

	const formOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSubmit(values)
	}, [])

	return (
		<form className={`flex flex-col`} onSubmit={formOnSubmit}>
			<Typography component={'h2'} sx={{ fontSize: '1.5rem' }}>
				{LOGIN_FORM_TITLE}
			</Typography>

			<FormControl sx={{ width: '25ch' }} variant="standard">
				<InputLabel htmlFor="account">{ACCOUNT_INPUT_BOX_LABEL}</InputLabel>
				<Input
					id="account"
					type={'text'}
					value={values.account}
					onChange={(e) => setValues({ ...values, account: e.target.value })}
				/>
			</FormControl>

			<FormControl sx={{ width: '25ch' }} variant="standard">
				<InputLabel htmlFor="password">{PASSWORD_INPUT_BOX_LABEL}</InputLabel>
				<Input
					id="password"
					type={showPassword ? 'text' : 'password'}
					value={values.password}
					onChange={(e) => setValues({ ...values, password: e.target.value })}
					endAdornment={
						<InputAdornment position="end">
							<IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>

			<div className="flex justify-between my-2">
				{/* <FormGroup> */}
				<FormControlLabel
					sx={{ color: checkBoxState.isAutoRemember ? '#1976d2' : '' }}
					onChange={() => setCheckBoxState({ ...checkBoxState, isAutoRemember: !checkBoxState.isAutoRemember })}
					control={<Checkbox checked={checkBoxState.isAutoRemember} />}
					label={REMEMBER_CHECKBOX_LABEL}
				/>
				{/* </FormGroup> */}

				<FormControlLabel
					sx={{ color: checkBoxState.isAutoLogin ? '#1976d2' : '', mr: 0 }}
					onChange={() => setCheckBoxState({ ...checkBoxState, isAutoLogin: !checkBoxState.isAutoLogin })}
					control={<Checkbox checked={checkBoxState.isAutoLogin} />}
					label={AUTO_LOGIN_CHECKBOX_LABEL}
				/>
			</div>

			<Input type="submit" value={LOGIN_BUTTON_LABEL} disableUnderline sx={{ backgroundColor: '#eee' }} />

			<Divider sx={{ my: '1rem' }} />

			<Button variant="text">{FORGET_PASSWORD_BUTTON_LABEL}</Button>
		</form>
	)
}
