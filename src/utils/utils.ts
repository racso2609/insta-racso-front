export const checkTypeOf = (value:any,type: string):boolean=> typeof value === type
export const shortString = (value:string,maxChars: number=30)=> {
  const toReturn = value.length > maxChars? `${value.slice(0,maxChars)}...` : value;
    return  toReturn
}
