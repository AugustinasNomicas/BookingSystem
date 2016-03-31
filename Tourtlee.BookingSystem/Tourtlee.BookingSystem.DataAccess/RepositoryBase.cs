using System;
using System.Linq;
using Microsoft.Data.Entity;

namespace Tourtlee.BookingSystem.DataAccess
{
    public interface IRepositoryBase
    {

    }

    public interface IRepositoryBase<T> : IRepositoryBase where T : class
    {
        IQueryable<T> GetAll();
        IQueryable<T> FindBy(System.Linq.Expressions.Expression<Func<T, bool>> predicate);
        void Create(T entity);
        void Delete(T entity);
        void Update(T entity);
        void Save();
    }

    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected readonly BookingDbContext BookingDbContext;

        protected RepositoryBase(BookingDbContext bookingDbContext)
        {
            BookingDbContext = bookingDbContext;
        }

        public virtual IQueryable<T> GetAll()
        {
            IQueryable<T> query = BookingDbContext.Set<T>();
            return query;
        }

        public IQueryable<T> FindBy(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
        {

            IQueryable<T> query = BookingDbContext.Set<T>().Where(predicate);
            return query;
        }

        public virtual void Create(T entity)
        {
            BookingDbContext.Set<T>().Add(entity);
        }

        public virtual void Delete(T entity)
        {
            BookingDbContext.Set<T>().Remove(entity);
        }

        public virtual void Update(T entity)
        {
            BookingDbContext.Entry(entity).State = EntityState.Modified;
        }

        public virtual void Save()
        {
            BookingDbContext.SaveChanges();
        }
    }
}
