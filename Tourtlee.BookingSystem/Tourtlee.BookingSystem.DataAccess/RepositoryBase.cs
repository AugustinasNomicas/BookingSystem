using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace Tourtlee.BookingSystem.DataAccess
{
    public interface IRepositoryBase<T> where T : class
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
        private readonly BookingDbContext _bookingDbContext;

        protected RepositoryBase(BookingDbContext bookingDbContext)
        {
            _bookingDbContext = bookingDbContext;
        }

        public virtual IQueryable<T> GetAll()
        {

            IQueryable<T> query = _bookingDbContext.Set<T>();
            return query;
        }

        public IQueryable<T> FindBy(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
        {

            IQueryable<T> query = _bookingDbContext.Set<T>().Where(predicate);
            return query;
        }

        public virtual void Create(T entity)
        {
            _bookingDbContext.Set<T>().Add(entity);
        }

        public virtual void Delete(T entity)
        {
            _bookingDbContext.Set<T>().Remove(entity);
        }

        public virtual void Update(T entity)
        {
            _bookingDbContext.Entry(entity).State = EntityState.Modified;
        }

        public virtual void Save()
        {
            _bookingDbContext.SaveChanges();
        }
    }
}
