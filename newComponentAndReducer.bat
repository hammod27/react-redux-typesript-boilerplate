@echo off

set componentName=%1
set reducerName=%2
shift
shift

md src\components\%componentName%
break> "src\components\%componentName%\index.tsx"
break> "src\components\%componentName%\connectors.ts"
break> "src\components\%componentName%\props.ts"

md src\store\%reducerName%
break> "src\store\%reducerName%\index.ts"
break> "src\store\%reducerName%\selectors.ts"
break> "src\store\%reducerName%\state.ts"
md src\store\%reducerName%\actions
break> "src\store\%reducerName%\actions\index.ts"
