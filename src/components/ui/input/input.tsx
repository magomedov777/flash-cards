import { ComponentProps, KeyboardEvent, ReactNode, forwardRef, useState } from 'react'

import { Close } from '@/assets/icons/Close'
import { Search } from '@/assets/icons/Search'
import { Visibility } from '@/assets/icons/Visibility'
import { VisibilityOff } from '@/assets/icons/VisibilityOff'
import { clsx } from 'clsx'

import s from '@/components/ui/input/input.module.scss'

import { Typography } from '../typography/typography'
// import { Label } from '../label'
import { useGetId } from './useGetId'

export type InputProps = {
  errorMessage?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: ReactNode
  onClearClick?: () => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  search?: boolean
  value?: string
} & ComponentProps<'input'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const Input = /* @__PURE__ */ forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      errorMessage,
      iconEnd,
      iconStart,
      id,
      label,
      onClearClick,
      onEnter,
      onKeyDown,
      search,
      type,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0
    const isShowPasswordButton = type === 'password'
    const inputId = useGetId(id)
    const [showPassword, setShowPassword] = useState(true)

    if (search) {
      iconStart = (
        <Search backgroundColor={'transparent'} color={'var(--color-light-100)'} size={20} />
      )
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
      onKeyDown?.(e)
    }
    const classNames = {
      clearButton: s.clearButton,
      iconEnd: s.iconEnd,
      iconStart: s.iconStart,
      input: clsx(s.input, showError && s.error),
      inputContainer: s.inputContainer,
      root: clsx(s.box, className),
    }

    const isShowClearButton = onClearClick && rest?.value?.length! > 0
    const dataIconStart = iconStart ? 'start' : ''
    const dataIconEnd = iconEnd ? 'end' : ''
    const dataIcon = dataIconStart + dataIconEnd

    return (
      <div className={classNames.root}>
        <Typography variant={'label'}>{label}</Typography>
        <div className={classNames.inputContainer}>
          {!!iconStart && <span className={classNames.iconStart}>{iconStart}</span>}
          <input
            className={classNames.input}
            data-icon={dataIcon}
            id={inputId}
            onKeyDown={handleKeyDown}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            {...rest}
          />
          {isShowClearButton && (
            <button className={classNames.clearButton} onClick={onClearClick} type={'button'}>
              {<Close color={'var(--color-light-100)'} size={20} />}
            </button>
          )}
          {isShowPasswordButton && (
            <button
              className={s.buttonWrapper}
              // className={s.showPassword}
              onClick={() => setShowPassword(prev => !prev)}
              type={'button'}
            >
              {showPassword ? (
                <Visibility className={s.iconEnd} />
              ) : (
                <VisibilityOff className={s.iconEnd} />
              )}
            </button>
          )}

          {!!iconEnd && <span className={classNames.iconEnd}>{iconEnd}</span>}
        </div>

        {showError && <Typography variant={'error'}>{errorMessage}</Typography>}
      </div>
    )
  }
)

// import {
//   ChangeEvent,
//   ComponentProps,
//   ComponentPropsWithoutRef,
//   ReactNode,
//   forwardRef,
//   useState,
// } from 'react'
//
// import { Search } from '@/assets/icons/Search'
// import { Visibility } from '@/assets/icons/Visibility'
// import { VisibilityOff } from '@/assets/icons/VisibilityOff'
// import { Typography } from '@/components/ui/typography'
// import { clsx } from 'clsx'
//
// import s from './input.module.scss'
//
// export type InputProps = {
//   containerProps?: ComponentProps<'div'>
//   errorMessage?: string
//   iconEnd?: ReactNode
//   iconStart?: ReactNode
//   label?: string
//   labelProps?: ComponentProps<'label'>
//   onValueChange?: (value: string) => void
//   search?: boolean
// } & ComponentPropsWithoutRef<'input'>
//
// export const Input = forwardRef<HTMLInputElement, InputProps>(
//   (
//     {
//       className,
//       containerProps,
//       errorMessage,
//       iconEnd,
//       iconStart,
//       label,
//       labelProps,
//       onChange,
//       onValueChange,
//       placeholder,
//       search,
//       type,
//       ...restProps
//     },
//     ref
//   ) => {
//     const [showPassword, setShowPassword] = useState(false)
//     const isShowPasswordButton = type === 'password'
//     const finalType = getFinalType(type, showPassword)
//
//     const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
//       onValueChange?.(e.target.value)
//       onChange?.(e)
//     }
//
//     const classNames = {
//       error: clsx(s.error),
//       input: clsx(s.input, !!errorMessage && s.error, className),
//       inputContainer: clsx(s.inputContainer),
//       label: clsx(s.label, labelProps?.className),
//       root: clsx(s.root, containerProps?.className),
//     }
//
//     return (
//       <div className={classNames.root}>
//         {label && (
//           <Typography as={'label'} className={classNames.label} variant={'body2'}>
//             {label}
//           </Typography>
//         )}
//         <div className={classNames.inputContainer}>
//           {search ? (
//             <Search className={s.iconStart} color={'var(--color-light-100)'} size={20} />
//           ) : (
//             ''
//           )}
//           <input
//             className={classNames.input}
//             onChange={handleOnChange}
//             placeholder={placeholder}
//             ref={ref}
//             type={finalType}
//             {...restProps}
//           />
//
//           {isShowPasswordButton && (
//             <button
//               className={s.showPassword}
//               onClick={() => setShowPassword(prev => !prev)}
//               type={'button'}
//             >
//               {showPassword ? (
//                 <Visibility className={s.iconEnd} />
//               ) : (
//                 <VisibilityOff className={s.iconEnd} />
//               )}
//             </button>
//           )}
//         </div>
//         <Typography className={classNames.error} variant={'error'}>
//           {errorMessage}
//         </Typography>
//       </div>
//     )
//   }
// )
//
// export const getFinalType = (type: ComponentProps<'input'>['type'], showPassword: boolean) => {
//   if (type === 'password' && showPassword) {
//     return 'text'
//   }
// }
