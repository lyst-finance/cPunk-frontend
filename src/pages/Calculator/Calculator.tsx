import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Card from '../../components/Card/Card'
import Select from '../../components/Select/Select'
import './Calculator.scss'

const Calculator = () => {
  interface IFormData {
    nft: string
    id: string
    characteristic1: string
    characteristic2: string
  }
  const { register, handleSubmit } = useForm<IFormData>()

  interface ISelectOptions {
    value: string
    label: string
    logo? : string,
  }

  const [formValues, setFormValues] = useState({
    nft: '',
    id: '',
    characteristic1: '',
    characteristic2: '',
  })

  const [selectedOption, setSelectedOption] = useState<ISelectOptions>({
    value: '',
    label: '',
  })

  useEffect(() => {
    onSubmit(formValues)
    // eslint-disable-next-line
  }, [formValues])

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    data = {
      ...data,
      nft: selectedOption.value,
    }
    console.log(data)
  }

  const selectOptions = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
  ]

  return (
    <div className='calculator'>
      <h1>Valuation Calculator</h1>
      <Card>
        <form
          className='form'
          onSubmit={handleSubmit(onSubmit)}
          autoComplete='off'
          noValidate
        >
          <div className='form-item'>
            <div className='form-label'>Select NFT market:</div>
            <Select
              name='nft'
              options={selectOptions}
              placeholder='Select NFT market:'
              defaultValue={selectedOption}
              onChange={(selectedOption) => {
                setSelectedOption(selectedOption)
                setFormValues({ ...formValues, nft: selectedOption.value })
              }}
            />
          </div>
          <div className='form-item'>
            <label htmlFor='calc-id' className='form-label'>
              Enter ID:
            </label>
            <div className='form-item-wrap'>
              <div className='input-wrap'>
                <input
                  id='calc-id'
                  type='text'
                  placeholder='Enter ID'
                  {...register('id')}
                />
              </div>
            </div>
          </div>
          <div className='form-item'>
            <label htmlFor='calc-characteristic1' className='form-label'>
              Characteristic 1:
            </label>
            <div className='form-item-wrap'>
              <div className='input-wrap'>
                <input
                  id='calc-characteristic1'
                  type='text'
                  placeholder='Some txt'
                  {...register('characteristic1')}
                />
              </div>
            </div>
          </div>

          <div className='form-item'>
            <label htmlFor='calc-characteristic2' className='form-label'>
              Characteristic 2:
            </label>
            <div className='form-item-wrap'>
              <div className='input-wrap'>
                <input
                  id='calc-characteristic2'
                  type='text'
                  placeholder='Some txt'
                  {...register('characteristic2')}
                />
              </div>
            </div>
          </div>
          <input type='submit' hidden />
        </form>
        <div className='form-item'>
          <label htmlFor='calc-characteristic2' className='form-label'>
            Value:
          </label>
          <div className='input-wrap'>
            <input readOnly type='text' defaultValue={`$0.00`} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Calculator
