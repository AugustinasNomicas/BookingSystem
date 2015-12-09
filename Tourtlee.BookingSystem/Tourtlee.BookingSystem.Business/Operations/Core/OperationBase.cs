namespace Tourtlee.BookingSystem.Business.Operations.Core
{
    public abstract class OperationBase<TRequest> : OperationBase
    {
        protected abstract void OnOperate(TRequest request);

        public void Operate(TRequest request)
        {
            OnOperate(request);
        }

        protected OperationBase(IOperationContext operationContext) : base(operationContext)
        {
        }
    }
    public abstract class OperationBase<TRequest, TResponse>: OperationBase
    {
        protected abstract TResponse OnOperate(TRequest request);

        public TResponse Operate(TRequest request)
        {
            return OnOperate(request);
        }

        protected OperationBase(IOperationContext operationContext) : base(operationContext)
        {
        }
    }

    public abstract class OperationBase
    {
        protected IOperationContext OperationContext { get; }

        protected OperationBase(IOperationContext operationContext)
        {
            OperationContext = operationContext;
        }
    }
}
