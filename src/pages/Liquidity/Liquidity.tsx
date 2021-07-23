import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Card from '../../components/Card/Card'
import Select from '../../components/Select/Select'
import cPunkImg from './../../assets/images/cpunck.svg'
import './liquidity.scss'

const Liquidity = () => {
  interface IFormData {
    asset: string
    eth: string
    assetVal: string
  }
  const { register, handleSubmit } = useForm<IFormData>()

  interface ISelectOptions {
    value: string
    label: string
    logo?: string
  }

  const [selectedOption, setSelectedOption] = useState<ISelectOptions>({
    value: 'cPunk',
    label: 'cPunk',
    logo: cPunkImg,
  })

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    data = {
      ...data,
      asset: selectedOption.value,
    }
    console.log(data)
  }

  const selectOptions = [
    {
      logo: cPunkImg,
      value: 'cPunk',
      label: 'cPunk',
    },
  ]

  return (
    <div className='liquidity'>
      <h1>Liquidity</h1>
      <Card>
        <form
          className='form'
          onSubmit={handleSubmit(onSubmit)}
          autoComplete='off'
          noValidate
        >
          <div className='form-item'>
            <div className='form-label'>Select asset to provide Liquidity</div>
            <div className='select-sm'>
              {!!selectedOption.logo && (
                <img className='left-label' src={selectedOption.logo} alt={selectedOption.label} />
              )}
              <Select
                name='asset'
                options={selectOptions}
                onChange={(option) => {
                  setSelectedOption(option)
                }}
                defaultValue={selectedOption}
              />
              <input
                className="right-label"
                type='number'
                placeholder='0.000000'
                {...register('assetVal')}
              />
            </div>
          </div>
          <div className='form-item'>
            <label htmlFor='eth' className='form-label'>
              2. Provide Additional ETH
            </label>
            <div className='form-description'>
              An equivalent UST amount must be provided.
            </div>
            <div className='form-item-wrap'>
              <div className='input-wrap'>
                <strong className='left-label'>ETH</strong>
                <input
                  id='eth'
                  type='number'
                  placeholder='0'
                  className="right-label"
                  {...register('eth')}
                />
              </div>
            </div>
          </div>
          <div className="form-submit">
            <button type='submit'>Create LP Token</button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Liquidity
