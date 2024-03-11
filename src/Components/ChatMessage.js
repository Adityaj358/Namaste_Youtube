import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
       <img
          className="h-8"
          alt="user"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAACUCAMAAACTBfSWAAAAeFBMVEX///8jHyAAAAAfGxz29vb8/PwZFBXz8/P5+fkdGBkIAAAUDhDu7u4XERPr6+vo6OgOBwmZmJjQ0NDd3d24t7epqKjX19e+vr7Ix8ehoKCvr69paGiTkpJCQUF2dXWAgIBMTExeXV0tKitXVVWJiYk5ODgPEA80MTI+82SQAAANMklEQVR4nO1da5uyLBBeQSmlEk+ZWZ7b/v8/fGWwcttKKMP2ud7703OoZGQY7jkwfH39Dw0wF64bBGtAELjuwpx6RG+F5frxNmmysjhUNkOI4epQlNku2cbrlTX16N4BN/bydG8ghBxGiY0Nw8DYJpQ57T9VRZp78WrqMY6LtZcWFXUo4bLeAF62/9lK7q2nHulYcHeGTZf35O1JTpaUGJ479XhfxtzdHhDCPyVjjCt4CwJ//PE+MEL7rTufetwvYOE3FC3PAi0d5FT7Os3yvNl5LXZNnmdpva9ao9b7GMKNP5t67E9iEWbOeZLt1l4VmRfFfjD7YaitReDH0S4rWgtnnz6MaB7+SbGj1DiJ3OpslW03weL+pxfBJkoxunzDSLf6xjoS4sKmnQAUoWyzkpi4mbvJEKKd2AzX/vvHOSKCGhExdkK/y1jlq3H9TU/fRenfMeXuDrFutoxip0w53KZopxl+AKHobzCW+WaPxEwxnEZPmaNFlJLutaHa/wME1W0o7ZZyGj6wXI+xCtNucTuG9/GTvSk6+4X2r3HpVdwpjE3KYKzRvQce7uYHJS97jKaHHKEzRjjG2N4EqxaTQ0g6CrWYpcKQY5R/7MJedwrJitFmZrsXBg2Vn7mwrVgMkKB8xDUY5AjIKao/0uvcHmE5MyMa1UcyExvepVNsxvzZceAZRBjt0cfW7fv0qMTsdMATrgIq30AcXWEfbfRhUu9gWNjJ3/PzmQMxNfRJW9c8geAHYc27ntAwbs7IB2m4FcF6Jjh53zM82LHp+BbjWcQVyGxEsgxi4YfJrmkab7uR3X6thPC5ZvsPoaQBJuBGSs7zKin3R8OmjsOIcdyXnqQYCbib7PD8QEfEHIu9Sk7muEDO0san0Bm2CUN7OfskjKVTvDDWsTCvgZOgncRnZ3HVC46esUTHWIarNyA1etMOoYB5I2TOJD7rp6cg0m+xMxmWmXGpsTF5xDCuuH1BqYQj6R3QbZEFk5NYHrOU/8JyPzENd/d8olktYYwy5840CxAmobZBwXm4kz4dkRkDFigcqYY5g5k+mGYARunwA0MDFCsaYexPIxSuwLBmrsohmSUXiQcuF5pwtzZBEjZsxGaZhMzcMA97pRlfT/Q4xvCfA4hiV4OsytpJySy12bsTK3gsvMnhBR2jweS0ACHDmRxYUriaSMFnKYWFOPxJ46Hd7kNCby0wiXQiihJxcmXT4VeeSyo36I03+HMBj5rZx0n8LbfkhhQN06PAHhS1Bzzsd0X8JaJsigQ2PJpJhIcyqiI0HQ5EuCXlrsoEAYUV52IyPDjYS69oDlIMr5dt++BJphqMKC2H6URyw696hOXwbjTjnh1G+nP2R4iWDE/0LHPUhHay4RcZwV4t49mNig2Qbokwhq+m3Vy/JZyoA0itO9VTwB4tYUtChf1KQCbQG6IJptoFWkSHP2gl6kLLUEwIhCO9RXYN7NHDROJrpsJMOqFzCbMMbJ5pZeBmQbj5lEjhrEqmKjSTScu6nM4vy9dFkUdcwUYpoV1uobhjtaIUEi9znrabgn3QGTgCnUUy7Dc4KhpvTqtlPCjYPqhMDHYkAA9cSiUbgkqJeYPQUm4jED02TpmHFDZcErSTsZ1vE3rOo+Bkr4+VwTZEpfISrio34ZJI5bhDiMNqi4EvOLOUIk48oa7kY3FQucT+mr9O1OjaqsVykrHd7QtKFam3dFh7lrWbIa11lcyC4WRyhtOUjQlegDy5lO+O8doHXYt6i3hkTtKH376Fe3MIsqCpIsPku7QtZ21atcCSkdATpKNfwd7Wt6hn+5ZkkVry00GpaMmodGV7TbjV07NTL2DDknbrGkX9lsp0AzKIn+hJ5gVgx6SLasJKSb8VYrsJuHp6ov7gwDPpoc1KJZeDSiQPOmxAaD1BUdiEvuX3x0hJ6KV8EN/9NqRrXV4F0I1v+c/PDwpM1JGf6K8vLrSjJ2bEjTfGCl/YqKR1VBgWr1OkheLwnwOv51ruVb4xWIVwkVlJWTkdxrba6J8EUtXCr0UluVdLFexckIIlUxv9k4CoiVrp61ouWctkAkU9iACO0leeBNRcyARC+whlYglUtVYK9hEtceAVUl57X1/WFg9KTY+qHhMEM7TkOSDOr1zzYcVoQGpkKHMrkajW4VEHTwndrmv0yIZjVKiTaCG0Dh76rNBf88xe3qHhNn2qQP4PCN26/SV2bohto0qqHvYX9An93JoWmG0zA7EfcmOGjvmTToO+Nb14Zsu6fHuTlNDVhvCOH+2fWBr5z55F9WAoOhxq8wly0oe1CjZeVh8M41hk3sPuEEMQ+7SWhk9AQ1/0bSxrzvHiWVmo7NBHQ6lsiOytgPCbJqExjwBredQAjrx0cKnlURATUAgivA88iKDJnxaRkw/osmNCuEhP5ARiut/P1wDM3WDtb+IWm42/dp/vORd8v7J5qgESNco5UmvuxklW89Zzv2DUeeTPLFXpY43RUOChEnWrF5iuD5QEIXqTfGMK/5dGa6VOZDuqi4V2lEyhsMfd7A4IDRcZ8e5d+91GnlWmGjMcMx6PI4WkJQv4HEvHgJfISRPJubMgl1XrsahmBtVMUmGOVV5QxUIyRotcKhiy1pm17CofZfysqKLKJSe8nVcl8+OQJJM4WTAOfGDfw5bM38ue0rkGRhJlQ7B1aiv6hpqTwTTyLGLKFZIXMGeoq9eC27GlzCnPUQDVRUMp1VX+7DSfJjt7/FZ9UV2krZNwMhw8CeRTOfeAyoesbwt+pb6z1FDi4mQPdsh1/YJqn8CKBwvW5EvaPug7nQW1obZxfyLWxQgyP055BAcwLBr9nubxObSgeFm3BZz7RbexQjHbOAD9pvUdI7KQOSwtB1TeWUMmz1hi5UTQKzALOC1zR/nUTzA8kPrOQVLwepZ6g1Y56Pdt/z0aUea7mwQwE0dPvckJgWg5cssD9tUrvB/BPt7UJ/F8ze3+eeHJzTo3cap6RLD0hkuRjBGHVsZGnFf//aq9UZWb44YSW6K7ivbT8uKs5a/xBHvl0zlDoL/P2Sb84UzrASUA1A3+Ok00V60ElQFKrmzHAo4LSJ0WGhcuTCm9sq3B7SDYa7CNq6BCxCd6kr42sDNdq55cPxNVXIV5g1r2dOvo6Hoi/Dh7sHqLzFd7o+UJ0z1JumHL3/fPQxSqB8Slhe4bTJ9hheMUI2MBSUOnZ0NX3++RuWUovaku+ZulU7VEjkWX3ostS0bmJRfQi6XuTsJM1rIJUnkYn58/Nhm74JJFCgw4Lq4ng3ULc9GZ66zg47OxEy7kC9YUcaYRGCAaHlyiwWMFD37JfHYwG1CuKfuRdZ3n7Op0Isx8j9SXplCisFb2jN6bEECPwQtFcccLmvRlPm3Ja2i6MXGPwXPTv3PkKBhfapSeWOis5sqt89D0bVg58BF0NmZdM+4xZT5TL/hpLNHn592wRIT7Ymrmo0rd7zEpiL3+7j03MDt0fXHPxiVlowWMCDm/TEvEG9FHVLB9+RV3MjFOzmEd7zgSS3EOZ1U2d9/Q9Vm2GODdCKHvM6nOvr51uiLmRaDyzD7nOyz6e3/MzRQRXORGjAs3HCF/1y7n5hKXaaCnOdWYuxqEuJvB7kXmzehWU2ulaUb+JQyaQnE8+axLdjxRsY/SC1UK9uyJ0ovTLC9pr1usKTYEYnzOPQUAr7sNpnfN0zw5PGnGMTPSHgFZC3JLP03m0/UJBip6I1s3xhPlCNihadgj192lQuzwUbotEBnibp1j39WNM0fRomFEsv6NavNGXMGFPvFunS8rFLszcfrFIjN+a6O8yEuEGr/vTvjp6RalD7mL4hrrY3eT2bGviHO3FXv4el5uvPg9tT/vN+3Up7UVH8JJbqAUN6/a6OrauqiuyN17mPkXCF3iY3FVRWW1Fgy+Q77fdn/NGGgqUWzioOhnwifw0sJAzrU5x/aSOYgdi7QJr2sjg+56TOxIXtQxGeJaTA5G9bUUQejl5YH+qPSmR37HeBIHv0IhQXS67ZBmH7qcL3Cb7vgsJWl0nck1XX8Tb+FenZ2XbMN44wfurcz6Iqm7y5kdsp04TiIDc8PEFPFLW5NbNbrW3DTNR4eyZl7RXRXZKoz7sRcd/oCZdxX8mNCqUT4K6eZGR2Bth27/hsgcQWqcblRGfHFL14aYq7A4XUJts2P+BzT7AitMz8XtDC3z0JdprLoOc/t0/7SNjvnH+M6ymG1T55TD5DeNp97Wf1CwP1uHSXbs3TRe5Z9IOwexitMLA7Xb+d6XWRNtgituZbl+uMv4Ln7exG3Edk+fL54asyDrH1ohlDGjOuyLosyydtdq8iyti+JwbPn6ha9hhkiy0tvPeWSY0f6bkh4Pw9i27SVt5W9B6bL926UhX2vu6Q9X+s8i2NWHdvMZiidgwlhVlNvP9SwU4Sd52Vop5173C8LaZVBku1BXF1A9sNzN1ssKYN5Oq9RwI2nrXDGg4IeyieL1PzPHfViLYO2HSZPW+4q0oi4NcDeiewT8H4LFqfesw0MK/jb8B/8cwL+lxW+uAAAAAElFTkSuQmCC"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
