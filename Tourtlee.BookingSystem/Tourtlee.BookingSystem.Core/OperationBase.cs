namespace Tourtlee.BookingSystem.Core
{
    public abstract class OperationBase<TRequest>
    {
        public virtual void Operate(TRequest request)
        {
            
        }
    }
    public abstract class OperationBase<TRequest, TResponse>
    {
        public virtual TResponse Operate(TRequest request)
        {
            return default(TResponse);
        }
    }
}
